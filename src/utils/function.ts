import { config } from "@/config";

export async function fetchHitokoto(): Promise<string> {
    try {
        if (config.hitokoto !== '#HitokotoEnable#') {
            return config.hitokoto;
        }
        const response = await fetch('https://v1.hitokoto.cn?c=d&c=k')
        const hitokotoObj = await response.json()

        return hitokotoObj.hitokoto ?? 'Could not load Hitokoto'
    } catch (e) {
        console.log(e)
        return 'Failed to load Hitokoto'
    }
}