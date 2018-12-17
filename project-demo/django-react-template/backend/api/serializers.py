from rest_framework import serializers
from api.models import Api
from django.contrib.auth.models import User

class ApiSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    highlight = serializers.HyperlinkedIdentityField(view_name='api-highlight', format='html')

    class Meta:
        model = Api
        fields = ('url', 'highlight', 'owner', 'title', 'code', 'linenos', 'language', 'style')

class UserSerializer(serializers.ModelSerializer):
    api = serializers.HyperlinkedRelatedField(many=True, view_name='api-detail', read_only=True)

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff', 'api')
