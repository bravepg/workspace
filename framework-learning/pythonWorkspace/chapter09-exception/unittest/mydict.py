# 单元测试
class Dict(dict):
    def __init__(self, **kw):
        super(Dict, self).__init__(**kw)
    
    def __getattr__(self, key):
        try:
            return self[key]
        except KeyError:
            raise AttributeError(r"'Dict' object has no attribute '%s'" % key)

    def __setattr__(self, key, value):
        self[key] = value

# unittest 单元测试模块
