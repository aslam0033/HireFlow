async function deleteRequest(url){
    try {
    let response = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      credentials:"include"
    });
    response = await response.json();
    return response
  } catch (e) {
    return "Something went wrong";
  }
}

export default deleteRequest