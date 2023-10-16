import { Button, Card, } from "antd";
import {Link} from 'react-router-dom';

import { CategoryType } from "../../types/category";

const { Meta } = Card;

const CategoryCard = ({editCategory,deleteCategory, name, image, id }: CategoryType) => {
  return (
    <Card hoverable cover={<img height={200} src={image} alt={name} />}>
      <Meta title={name} style={{ marginBottom: "20px" }} />
      <Button style={{marginRight:'10px'}} type='primary' onClick={() => editCategory(id)}>Edit</Button>
      <Button style={{marginRight:'10px'}} danger type='primary'  onClick={() => deleteCategory(id)}>Delete</Button>
      <Button ghost type='primary'><Link to={`/product/${id}`}> Products </Link></Button>
    </Card>
  );
};

export default CategoryCard;
