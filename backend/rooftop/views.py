from django.http import HttpResponse
from django.utils import timezone

def ping(request):
    now = timezone.now()
    return HttpResponse(f"Hey World (sent at {now})")
    

