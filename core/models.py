from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Music(models.Model):
    name = models.CharField('Nome',max_length=50)
    slug = models.SlugField('Identificador',max_length=50)
    artist = models.CharField('Artista',max_length=50)
    tone = models.CharField('Tom',max_length=8)
    minutes = models.IntegerField('Minutos',default=0)
    seconds = models.IntegerField('Segundos',default=0)
    musicFile = models.FileField('Arquivo musical',upload_to='uploads/',null=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)
        verbose_name = ('Musica')
        verbose_name_plural = ('Musicas')

class Repertory(models.Model):
    name = models.CharField('Nome',max_length=20)
    slug = models.SlugField('Identificador',max_length=20)
    music = models.ManyToManyField(Music, related_name='music_repertory')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)
        verbose_name = ('Repertorio')
        verbose_name_plural = ('Repertorios')
