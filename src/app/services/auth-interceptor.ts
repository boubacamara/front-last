import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { UtilisateurService } from "./utilisateur.service";


export const authInterceptor: HttpInterceptorFn = (request, next) => {

    let utilisateur = inject(UtilisateurService);
    let jeton = utilisateur.recuperJeton();

    request = request.clone({
        setHeaders: {
            Authorization: jeton ? `Bearer ${jeton}`: ''
        }
    });

    return next(request);
}