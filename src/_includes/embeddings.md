<div class="flex flex-wrap md:flex-nowrap">
    <!-- <div class="w-full md:w-1/2 md:pr-4 z-10 shadow-lg shadown-black border-r-8 border-r-black"> -->
    <div class="w-full md:w-7/12 lg:w-1/2 md:pr-4">
        <h3>Instagram-Posts</h3>
        {% include "instagram-embed.html" %}
    </div>
    <div class="w-full md:w-5/12 lg:w-1/2 md:pl-4 -z-10">
        <!-- Needs at least one video on the channel -->
        <!-- <h3>YouTube-Videos</h3> -->    
        <!-- include "youtube-embed.html" -->
        
        <h3>Soundcloud-Podcasts</h3>
        {% include "soundcloud-embed.html" %}

        <!-- Todo: authenticate accounts and sync with https://www.sociablekit.com so we can also embed the whole tiktok feed and get more customizations for insta, youtube and soundcloud feeds -->

        <div class="mt-8 text-lg flex items-center w-full justify-center">
        <a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/ensemble"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg">Ensemble</div></a>
        <a class="no-underline hover:no-underline hover:text-white" style="text-decoration: none !important" href="/kurs"><div class="py-3 px-6 max-w-10 m-6 border border-gray-300 hover:border-white hover:bg-gray-900 hover:text-white rounded-lg"><img src="/assets/favicon/favicon_transparent.png" alt="Hopsa Logo" class="w-6 h-6 inline -mt-2">&nbsp;Sei Dabei</div></a>
        </div>

    </div>
</div>