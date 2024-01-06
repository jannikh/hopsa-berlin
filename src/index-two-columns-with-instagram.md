---
layout: default.njk
title: Willkommen
# redirect: [home, landing, start, hopsa]
---

<div class="flex flex-col justify-center items-center min-h-screen mx-auto text-center">

{% include "landingpage.md" %}

</div>

# 

<div class="flex flex-wrap md:flex-nowrap">
    <div class="w-full md:w-7/12 lg:w-1/2 md:pr-4">
        <h3>Instagram-Posts</h3>

        {% include "instagram-embed.html" %}

        <h1> </h1> 

        {% include "links.md" %}

    </div>
    <div class="w-full md:w-5/12 lg:w-1/2 md:pl-4 -z-10">
        <h3>Nächste Auftritte</h3>

        {% include "termine.md" %}
  
        <div class="mt-8 text-lg flex items-center w-full justify-center">
        <a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/Ensemble"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg">Ensemble</div></a>
        <a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/kurs"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg"><img src="/assets/favicon/favicon_transparent.png" alt="Hopsa Logo" class="w-6 h-6 inline -mt-2">&nbsp;Mitmachen</div></a>
        </div>
        
        <h3>Soundcloud-Podcasts</h3>
        {% include "soundcloud-embed.html" %}
    </div>
</div>
