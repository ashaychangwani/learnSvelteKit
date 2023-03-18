import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let guide = [];
    guide = await res.json()
    if (res.ok) {
      return {
        guide: guide
      }
    }

    throw redirect(301,'/guides');
  }