/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let guides = [];
    guides = await res.json()
    if (res.ok) {
      return {
        guides: guides
      }
    }

    return {
      status: res.status,
      error: new Error('Could not fetch the guides')
    }
  }