from django.db import models

class Tender(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.URLField()  # Original tender portal link
    posted_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
