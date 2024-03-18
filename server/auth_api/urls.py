from django.urls import path
from .views import SignupView, LoginView

urlpatterns = [
    path('signup', view=SignupView.as_view(), name="signup"),
    path('login', view=LoginView.as_view(), name="login"),
]