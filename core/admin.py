from django.contrib import admin

from .models import Music, Repertory

# Register your models here.

class MusicAdmin(admin.ModelAdmin):
    list_display = ['name','slug','artist','tone']
    search_fields = ['name','slug','artist','tone']

class RepertoryAdmin(admin.ModelAdmin):
    list_display = ['name','slug']
    search_fields = ['name','slug']

admin.site.register(Music, MusicAdmin)
admin.site.register(Repertory, RepertoryAdmin)


