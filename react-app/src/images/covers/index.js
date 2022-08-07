import c0 from "./0.jpg";
import c1 from "./1.jpg";
import c2 from "./2.jpg";
import c3 from "./3.jpg";

export function getImage(num) {
  switch (num) {
    case 0:
      return c0;
    case 1:
      return c1;
    case 2:
      return c2;
    case 3:
      return c3;
  }
}

export function getTitle(num) {
  switch (num) {
    case 0:
      return "Hunter x Hunter";
    case 1:
      return "Rent-A-Girlfriend";
    case 2:
      return "Attack on Titan";
    case 3:
      return "SPY×FAMILY";
  }
}
