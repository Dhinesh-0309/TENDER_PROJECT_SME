# Generated by Django 5.1.6 on 2025-02-26 17:12

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tenders', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tender',
            name='deadline',
        ),
        migrations.AddField(
            model_name='tender',
            name='link',
            field=models.URLField(default='https://example.com'),
        ),
        migrations.AddField(
            model_name='tender',
            name='posted_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
