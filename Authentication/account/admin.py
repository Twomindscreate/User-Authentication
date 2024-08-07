from django.contrib import admin
from .models import User, OneTimePassword,Profile
# Register your models here.

admin.site.register(User)
admin.site.register(OneTimePassword)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        'user', 'username', 'phone_number', 'address', 'gender',
        'occupation', 'department', 'role', 'birth_date', 'profile_picture'
    )
    search_fields = ('email', 'username', 'phone_number')
    list_filter = ('gender', 'occupation', 'department', 'role')