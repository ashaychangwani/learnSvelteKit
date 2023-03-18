/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let guide = [];
    guide = await res.json()
    if (res.ok) {
      return {
        props: {
          guide: guide
        }
      }
    }

    return {
      status: res.status,
      error: new Error('Could not fetch the guides')
    }
  }