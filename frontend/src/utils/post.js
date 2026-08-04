async function post(url, body) {
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials:"include",
      body: JSON.stringify(body),
    });
    response = await response.json();
    return response
  } catch (e) {
    return "Something went wrong";
  }
}

export default post
