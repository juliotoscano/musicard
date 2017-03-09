
from django.shortcuts import render
from django.http import HttpResponse
from .models import Music, Repertory

# Create your views here.

def index(request):
    #repertorio principal.
    #Nesta etapa inicial, o sistema precisa disponibilizar as cifras de musicas.
    #Ordenar primeiro meu repertorio.
    #inserir depois os pedidos.
    #excluir os que estao repetidos. 
    musics = list(Music.objects.all())
    context={
        'musics': list(Music.objects.all()),
    }
    return render(request,'index.html',context)

def Create_repertorio(request):
    #Criar novo repertorio
    return render(request, 'createRepertory.html');

