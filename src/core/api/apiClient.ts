const apiClient = (input: RequestInfo, init?: RequestInit) => {

  return fetch(`${import.meta.env.VITE_BASE_URL}${input}`, { credentials : "same-origin", ...init})
    .then((response: Response) => {
      if(response.status >= 400) {
        if(response.status === 401) {
          window.location.reload();

          return;
        }

        return Promise.reject(response);
      }

      return response;
    })
}
export default apiClient;
