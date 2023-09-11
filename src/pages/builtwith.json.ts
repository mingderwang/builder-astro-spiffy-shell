// Outputs: /builtwith.json
export async function GET({params, request}) {
    const headers = new Headers();
headers.append('Content-Type', 'application/json'); // Example header

const responseInit: ResponseInit = {
  status: 200, // HTTP status code
  statusText: 'OK', // HTTP status text
  headers: headers // Pass the Headers object with your custom headers
};
    return new Response(
      JSON.stringify({
        name: 'Astro',
        url: 'https://astro.build/'
      }),
      responseInit
    )
  }