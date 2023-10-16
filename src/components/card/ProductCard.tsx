import { Button, Card } from "antd";
import { ProductType } from "../../types/product";

const { Meta } = Card;

const ProductCard = ({editCategory, deleteCategory, description, price, discount,  name, image, id }: ProductType) => {
  return (
    <Card hoverable cover={<img height={200} src={image} alt={name} />}>
      <Meta title={name} style={{ marginBottom: "20px" }} />
      <p>{description}</p>
      <p>{price}</p>
      <p>{discount}</p>
      <Button style={{marginRight:'10px'}} type='primary' onClick={() => editCategory(id)}>Edit</Button>
      <Button style={{marginRight:'10px'}} danger type='primary'  onClick={() => deleteCategory(id)}>Delete</Button>
    </Card>
  );
};

export default ProductCard;
