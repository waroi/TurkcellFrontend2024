"use server"
import { revalidatePath } from "next/cache";

const URL = "http://localhost:3001"
// const URL = "buraya kendi json server urlinizi giriniz"

export const getNewArrivals = async () => {
    const res = await fetch(`${URL}/products`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    const newArrivals = data.filter((product) => product.newArrival === true);
    return newArrivals;
}

export const getTopSeller = async () => {
    const res = await fetch(`${URL}/products`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    const onSale = data.filter((product) => product.topSeller === true);
    return onSale;
}

export const getAlsoLike = async () => {
    const res = await fetch(`${URL}/products`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    const onSale = data.filter((product) => product.alsoLike === true);
    return onSale;
}

export const getCustomerComments = async () => {
    const res = await fetch(`${URL}/customerComments`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    return data;
}

export const getProductDetails = async (id) => {
    const res = await fetch(`${URL}/products/${id}`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    return data;
}

export const getComments = async (id) => {
    const res = await fetch(`${URL}/products/${id}/comments`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    return data;
}

export const postComment = async (id, rate, username ,comment) => {
    const product = await getProductDetails(id);

    const newComment = {
        id: String(new Date().getTime()),
        rating: rate,
        username: username,
        comment: comment,
        date: new Date().toISOString(),
    }

    const updatedComments = product.comments ? [...product.comments, newComment] : [newComment];

    const updatedProduct = {
        ...product,
        comments: updatedComments
    };

    const res = await fetch(`${URL}/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
    });
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }

    revalidatePath("/shop/[id]", "page");

    return res.json();
}

export const getProducts = async (query) => {
    const res = await fetch(`${URL}/products?${query}`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    return data;
}

export const getAllProducts = async () => {
    const res = await fetch(`${URL}/products`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    return data;
}

export const postUserToDB = async (user) => {
    const res = await fetch(`${URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    revalidatePath("/register", "page");
    return res.json();
}

export const getUserToDB = async (uid) => {
    const res = await fetch(`${URL}/users/${uid}`);
    const data = await res.json();
    return data;
}

export const updateUserToDB = async (id, baskets) => {
    const res = await fetch(`${URL}/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ baskets }),
    });
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }

    return res.json();
};

export const addToBasket = async (product) => {
    const res = await fetch(`${URL}/users/baskets`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }

    return res.json();
}


export const getBasket = async (id) => {
    const res = await fetch(`${URL}/users/${id}`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    return data;
}

export const getPromoCodes = async () => {
    const res = await fetch(`${URL}/promoCodes`);
    if (!res.ok) {
        throw new Error("An error occurred while fetching data");
    } else if (res.status === 404) {
        throw new Error("404 Not Found");
    } else if (res.status === 500) {
        throw new Error("500 Internal Server Error");
    }
    const data = await res.json();
    return data;
}