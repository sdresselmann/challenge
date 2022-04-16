import { ref } from "vue";
/**
 * singleton fetch method
 * @param {*} url for the target API
 * @returns {data, error} of the request method
 */
export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
}
