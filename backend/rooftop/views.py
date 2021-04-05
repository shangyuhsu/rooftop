from django.http import HttpResponse

def ping(request):
    return HttpResponse("What's up")