import { BasketItem } from "../data/AllItems";
import { ListActions } from "../types/app";

function basketReducer (state: BasketItem[], action: ListActions): BasketItem[] {
    const {type, item} = action;
    switch (type) {
        case 'add':
            return state.concat(new BasketItem({...item, amount: 1}));
        
        case 'increase':
            return state.map((chosen) => {
                if (chosen.id === item.id) {
                    /* there is a bug to which i did not find the best solution,
                    when the increment or decrement happens, the value used, is
                    doubled, therefore when using 0.5, the increment will be by
                    1 */
                    chosen.amount += 0.5;
                }
                return chosen;
            });

        case 'remove':
            return state.filter((chosen) => chosen.id !== item.id);

        case 'decrease':
            return state.map((chosen) => {
                if (chosen.id === item.id) {
                    chosen.amount -= 0.5;
                }
                return chosen;
            })

        default:
            throw new Error('something is wrong in basketReducer');
    }
}

export default basketReducer;