import { API } from '@/src/api/api';
import { TopPageModel } from '@/src/interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel | null> {
    await new Promise((res) =>
        setTimeout(() => {
            res('');
        }, 3000)
    );
    const res = await fetch(API.topPage.byAlias + alias, {
        next: { revalidate: 10 },
    });
    console.log('revalidating getPage');
    if (!res.ok) {
        return null;
    }
    return res.json();
}
