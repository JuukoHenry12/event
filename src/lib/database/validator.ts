import { z } from "zod"
const eventformSchema = z.object({
  title:z.string().min(3,'Title must be at least 3 characters'),
  description:z.string().min(3,'Description must be least 3').max(400,
    'Description must be less than 400'
    ),
  location:z.string().min(3,'LOcation must be least 3 characters').max(400,'LOcation must be less than 400 characters'),
  imageUrl:z.string(),
  startDateTime:z.date(),
  endDateTIme:z.date(),
  category:z.string(),
  categoryId:z.string(),
  price:z.string(),
  isFree:z.boolean(),
  url:z.string().url()

})

export default eventformSchema