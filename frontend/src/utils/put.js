async function put(url, body) {
  try {
    let response = await fetch(url, {
      method: "PUT",
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

export default put