const call_api = async () => {
   return await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
        .then(response => 
        { return response.json() }
        )
      .catch((error) => 
        console.log(error)
      )
}
export default call_api;