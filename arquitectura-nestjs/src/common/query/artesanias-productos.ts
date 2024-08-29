export const consulta = `
        SELECT id, nombre
        FROM public.newtable
        WHERE id = 1;  
`

export const allProductos = `
        SELECT id, description, title, url
        FROM public.productos;  
`