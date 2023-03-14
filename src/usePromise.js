const usePromise = async (prompt) => {
  let isPending = true;
  let data;

  await new Promise((resolve) => {
    setTimeout(() => {
      data = prompt * 10;
      isPending = false;
      resolve();
    }, 2000);
  });

  return isPending ? undefined : data;
};

export default usePromise;
