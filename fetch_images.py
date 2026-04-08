import urllib.request
import re
import json

def get_images(query):
    query = urllib.parse.quote_plus(query)
    url = f"https://html.duckduckgo.com/html/?q={query}"
    
    req = urllib.request.Request(
        url, 
        data=None, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    )

    try:
        response = urllib.request.urlopen(req)
        html = response.read().decode('utf-8')
        
        # DuckDuckGo HTML has tokens we need to extract for image search, but we can also just scrape Unsplash directly
        
        url = f"https://unsplash.com/napi/search/photos?query={query}&per_page=5"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        data = json.loads(res.read().decode('utf-8'))
        
        urls = [item['urls']['regular'] for item in data['results']]
        print(json.dumps(urls))
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    import sys
    query = sys.argv[1] if len(sys.argv) > 1 else "indian student"
    get_images(query)
