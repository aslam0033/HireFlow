async function get(url) {
  try {
    let response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });
    response = await response.json();
    return response
  } catch (e) {
    return "Something went wrong";
  }
}

export default get;
