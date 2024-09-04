import { Box, List, ListItem } from '@mui/material'
import {
  LandingContainer,
  LandingTypographyTitle,
  LandingTypography,
  LandingTypographyBold,
  LandingTypographySubTitle,
  LandingTypographyUnderTitle,
  LandingImg,
  LandingImg2,
  LandingBoxU,
  LandingBoxD,
  LandingBoxT,
  LandingBoxQ,
  LandingPicto1,
  LandingPicto2,
  LandingPicto3,
} from '../../styles/landing'
import banner from '../../assets/Hero.jpeg'
import voiture from '../../assets/voiture.jpeg'
import { Colors } from '../../styles/theme'
import pictogreen from '../../assets/picto-more-green.png'
import pictocar from '../../assets/picto-car.png'
import pictoelectrique from '../../assets/picto-electrique.png'

function Landing() {
  return (
    <Box>
      <LandingImg src={banner} alt="Banniere Site Web" />
      <LandingContainer>
        <Box>
          <LandingTypographyTitle>
            LE DUO ELECTRIQUE-THERMIQUE ARVAL SWITCH : MODE D'EMPLOI
          </LandingTypographyTitle>
          <LandingTypography sx={{ margin: ' 5px 0' }}>
            Avec Arval Switch, vos collaborateurs gagnent en autonomie sur la
            route, mais aussi pour réserver leur véhicule ! Aucune action n’est
            requise de votre part : l’ensemble de la prestation est géré de bout
            en bout par Arval, en direct avec les conducteurs.
          </LandingTypography>
          <Box sx={{ backgroundColor: Colors.bgdivU }}>
            <List sx={{ margin: '0 25px' }}>
              <ListItem>
                <LandingTypography>
                  1. Sur simple <span></span>
                  <LandingTypographyBold>
                    appel téléphonique
                  </LandingTypographyBold>
                  , ils demandent la mise à disposition d’un véhicule thermique
                  ou hybride, en précisant la catégorie souhaitée.
                </LandingTypography>
              </ListItem>
              <ListItem>
                <LandingTypography>
                  2. Le véhicule est{' '}
                  <LandingTypographyBold>
                    réservé rapidement{' '}
                  </LandingTypographyBold>
                  , dans l’une des 1 400 agences du réseau partenaire d’Arval,
                  réparties dans toute la France métropolitaine (dont Corse).
                </LandingTypography>
              </ListItem>
              <ListItem>
                <LandingTypography sx={{ marginRight: '30%' }}>
                  3. Un{' '}
                  <LandingTypographyBold>
                    SMS et/ou un mail de confirmation
                  </LandingTypographyBold>{' '}
                  leur est envoyé, où sont indiqués :
                  <List>
                    <ListItem sx={{ padding: '0 0 0 30px' }}>
                      - la période de réservation
                    </ListItem>{' '}
                    <ListItem sx={{ padding: '0 0 0 30px' }}>
                      - les coordonnées de l’agence où retirer le véhicule
                    </ListItem>{' '}
                    <ListItem sx={{ padding: '0 0 0 30px' }}>
                      - le solde restant sur leur réserve annuelle de 20 jours.
                    </ListItem>
                  </List>
                </LandingTypography>
              </ListItem>
            </List>
            <LandingPicto3
              src={pictoelectrique}
              alt="pictogramme station recharge électrique"
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex' }}>
          <LandingBoxU>
            <LandingImg2 src={voiture} alt="Voiture roulant sur l'autoroute" />
          </LandingBoxU>
          <LandingPicto2 src={pictogreen} alt="Pictogramme croix vert" />
          <LandingBoxD>
            <LandingTypographySubTitle>
              Besoin de services additionnels ?
            </LandingTypographySubTitle>
            <LandingTypographyUnderTitle>
              Arval Switch reste souple
            </LandingTypographyUnderTitle>
            <LandingTypography>
              Besoin d’équipements divers (siège bébé, rehausseur, coffre de
              toit, GPS…) ; d’assurances complémentaires, …
            </LandingTypography>
            <LandingTypography>
              Les demandes hors forfait SWITCH seront facturées sur la carte
              bancaire du conducteur par le loueur courte durée, conformément
              aux conditions générales de location du contrat courte durée qu’il
              aura signées en agence.
            </LandingTypography>
          </LandingBoxD>
        </Box>

        <Box>
          <LandingTypographyTitle>
            COMMENT SOUSCRIRE LE FORFAIT ARVAL SWITCH ?
          </LandingTypographyTitle>
          <LandingTypographySubTitle sx={{ margin: '15px 0' }}>
            2 formules sont proposées :
          </LandingTypographySubTitle>
          <Box sx={{ display: 'flex', alignItems: 'end', gap: '10px' }}>
            <LandingBoxT>
              <LandingTypographyUnderTitle>
                Arval Switch Essentiel
              </LandingTypographyUnderTitle>
              <LandingTypography>
                • Vos collaborateurs peuvent choisir des véhicules de catégorie
                Citadine, Compacte, Routière, Confort (automatique) et petit
                Monospace.
              </LandingTypography>
              <LandingTypography>
                En plus des véhicules de la formule Essentiel, véhicules Confort
                et Grand
              </LandingTypography>
            </LandingBoxT>

            <LandingBoxQ>
              <LandingPicto1 src={pictocar} alt="pictogramme voiture" />
              <LandingTypographyUnderTitle>
                Arval Switch Essentiel plus
              </LandingTypographyUnderTitle>
              <LandingTypography>
                • Confort (automatiques), Moyen et Grand Monospace (7 places).
              </LandingTypography>
            </LandingBoxQ>
          </Box>
        </Box>
      </LandingContainer>
    </Box>
  )
}

export default Landing
