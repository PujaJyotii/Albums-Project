import Card from "../UI/Card";
import classes from "./Data.module.css";

const btsAlbums = [
  {
    albumName: "MAP OF THE SOUL: 7",
    singer: "BTS",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI7676QqCwwtdA1JY48ATj2c9ts3eP_4CNw&s",
    price: 20.99,
    description:
      "MAP OF THE SOUL: 7 is BTS's fourth Korean studio album. It reflects the band's journey and growth.",
  },
  {
    albumName: "BE",
    singer: "BTS",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKuU-A7HSxdBlYoXQP3X7cpEiL8UMwhvOvfQ&s",
    price: 19.99,
    description:
      "BE is the fifth Korean-language studio album by BTS, offering a message of hope in the face of the COVID-19 pandemic.",
  },
  {
    albumName: "Love Yourself: Tear",
    singer: "BTS",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3jVxoTu1-fU4vMvGX9VzUapjd_dJZ6fKXQ&s",
    price: 21.99,
    description:
      "Love Yourself: Tear is the third Korean studio album by BTS, exploring themes of love and loss.",
  },
  {
    albumName: "WINGS",
    singer: "BTS",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFROTKO7cBv8NTxWuFv0gXj72PYK_BVKnWeQ&s",
    price: 18.99,
    description:
      "WINGS is the second Korean studio album by BTS, showcasing a blend of genres and a more mature sound.",
  },
  {
    albumName: "Dark & Wild",
    singer: "BTS",
    photo:
      "https://m.media-amazon.com/images/I/61OJIxZnhNL._AC_UF350,350_QL50_.jpg",
    price: 17.99,
    description:
      "Dark & Wild is the debut Korean studio album by BTS, featuring a mix of hip-hop and R&B tracks.",
  },
];

function FormData() {
  return (
    <Card className={classes.container}>
      <h2>The Tours</h2>
      <ul>
        {btsAlbums.map((user) => (
          <li>
            <div className={classes.bigbox}>
              <div className={classes.innerBox}>
                <img src={user.photo} alt="bts images" />
                <div>
                  <h3>{user.albumName}</h3>
                  <h4>{user.singer}</h4>
                  <p>Price:${user.price}</p>
                </div>
              </div>
              <div>
                <button>Add To Cart</button>
              </div>
            </div>
            <div className={classes.description}>{user.description}</div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default FormData;
