from django.utils import timezone
from django.db import models

class Tender(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.URLField(default="https://example.com")  # Provide a default link
    posted_date = models.DateTimeField(default=timezone.now)  # Use default instead of auto_now_add

    def __str__(self):
        return self.title
