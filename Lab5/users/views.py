from django.shortcuts import render, redirect
from .forms import UserForm
from .models import UserProfile

# Create your views here.
def register(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('user_list')
    else:
        form = UserForm()

    return render(request, 'register.html', {'form': form})


def user_list(request):
    users = UserProfile.objects.all()
    return render(request, 'user_list.html', {'users': users})