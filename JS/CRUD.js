import { db } from "./firebaseConfig.js";
import {
    ref,
    get,
    push,
    remove,
    update
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const pastaPessoas = ref(db, "pessoas/" );

export function cadastrar(cpf, nome) {
    return push(pastaPessoas, { cpf, nome });
}

export function editar(id, nome, cpf) {
    const itemRef = ref(db, "pessoas/" + id);
    return update(itemRef, { cpf, nome });
}

export function deletar(id) {
    const itemRef = ref(db, "pessoas/" + id);
    return remove(itemRef);
}

export function pesquisar(cpf, nome) {
    return get(pastaPessoas);
}