---
layout: page
title: Tesi
---

{% for tesi in site.data.tesi %}

{% if tesi.link %}
##[{{ tesi.title }}]({{ tesi.link }})
{% else %}
##{{tesi.title}}
{% endif %}

**{{ tesi.author }}**

*{{ tesi.period }}*

Supervisor: [{{ tesi.supervisor }}]({{ tesi.supervisorurl }})

{% if tesi.host %}
Hosted by {{ tesi.host }}
{% endif %}

### Publications
{% for pub in tesi.pubblications %}

{% if pub.link %}
0. [{{ pub.title }}]({{ pub.link }})
{% else %}
0. {{ pub.title }}
{% endif %}

{% endfor %}

{% endfor %}
