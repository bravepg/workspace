from api.models import Api
from django.contrib.auth.models import User
from api.serializers import ApiSerializer, UserSerializer
from api.permissions import IsOwnerOrReadOnly, CsrfExemptSessionAuthentication
from rest_framework import permissions, renderers, viewsets
from rest_framework.decorators import api_view, detail_route
from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.request import Request
from rest_framework.authentication import BasicAuthentication

# Create your views here.
@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'apis': reverse('api-list', request=request, format=format)
    })

class ApiViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Api.objects.all()
    serializer_class = ApiSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)

    @detail_route(renderer_classes=[renderers.StaticHTMLRenderer])
    def highlight(self, request, *args, **kwargs):
        api = self.get_object()
        return Response(api.highlighted)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserLoginAPIView(APIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        print (request.POST['username'], request.POST['password'])
        user = authenticate(username=request.POST['username'], password=request.POST['password'])
        serializer_context = {
            'request': request,
        }
        if user is not None:
            login(request, user)
            status = True
        else:
            status = False
        user = UserSerializer(instance=user, context=serializer_context).data
        result = {"status":status, "user": user}
        return Response({"result": result})
