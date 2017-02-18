
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    #repertorio principal.
    #Nesta etapa inicial, o sistema precisa disponibilizar as cifras de musicas.
    #Ordenar primeiro meu repertorio.
    #inserir depois os pedidos.
    #excluir os que estao repetidos.
    return render(request,'index.html')

def Create_repertorio(request):
    #Criar novo repertorio
    return render(request, 'createRepertory.html');

