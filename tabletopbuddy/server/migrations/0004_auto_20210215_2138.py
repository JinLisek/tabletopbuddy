# Generated by Django 3.1.5 on 2021-02-15 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0003_auto_20210215_2137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gamesession',
            name='players',
            field=models.ManyToManyField(related_name='game_sessions', to='server.Player'),
        ),
    ]
