import { redirect, error } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    await new Promise(resolve => setTimeout(resolve, 500));
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let guide = [];
    guide = await res.json()
    if (res.ok) {
      return {
        guide: guide
      }
    }
    throw error(404, {
      message: 'This guide could not be found'
    });
  }