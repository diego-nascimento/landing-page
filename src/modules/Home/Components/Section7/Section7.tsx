import { Grid1_2 } from '@/shared';
import React from 'react';
import { Container } from './components';

export const Section7 = () => {
  return (
    <Container>
      <Grid1_2 leftBigger title="Bringing the buggbeisees">
        <li
          className="bg-black h-80 bg-center bg-cover hover:scale-110 hover:shadow-lg transition-all duration-500"
          style={{
            backgroundImage:
              'url(https://img.freepik.com/fotos-gratis/ilustracao-de-formas-geometricas-com-luzes-de-laser-de-neon-otimo-para-fundos-e-papeis-de-parede_181624-32746.jpg?w=2000)',
          }}
        ></li>
        <li
          className="bg-red-500  h-80 bg-center bg-cover bg-no-repeat hover:scale-110 hover:shadow-lg transition-all duration-500"
          style={{
            backgroundImage:
              'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7043a0d1-b74b-4b91-a3af-cad99823d060/dfegna6-6d146a1f-d3e1-425f-a2d6-6c2ee028eaca.jpg/v1/fill/w_613,h_350,q_70,strp/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvZGZlZ25hNi02ZDE0NmExZi1kM2UxLTQyNWYtYTJkNi02YzJlZTAyOGVhY2EuanBnIiwiaGVpZ2h0IjoiPD01MTUiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzcwNDNhMGQxLWI3NGItNGI5MS1hM2FmLWNhZDk5ODIzZDA2MFwvbmlwaGlvbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.Oq625L-zpOQaI4bt_R49v2VgxCDHxM0LmUEUq1WjrPA)',
          }}
        ></li>
      </Grid1_2>
    </Container>
  );
};
