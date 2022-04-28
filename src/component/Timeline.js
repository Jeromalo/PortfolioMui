import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import './Timeline.css';
import { getThemeProps } from '@mui/system';

export default function (props) {
    const contenusTimeline = [
        [//1er élément de la timeline
            { titre: "totoGauche", contenu: "blablabla contenu de toto gauche" }, //élément gauche
            { titre: "totoDroite", contenu: "contenu de toto droite" }, //élément droite
        ],
        [//1er élément de la timeline
            { titre: "nouvel élément gauche2", contenu: "blablabla contenu de toto gauche" }, //élément gauche
            { titre: "nouvel élément droite2", contenu: "contenu de toto droite" }, //élément droite
        ],
        [//1er élément de la timeline
            { titre: "nouvel élément gauche3", contenu: "blablabla contenu de toto gauche" }, //élément gauche
            { titre: "nouvel élément droite3", contenu: "contenu de toto droite" }, //élément droite
        ],
        [//1er élément de la timeline
            { titre: "nouvel élément gauche4", contenu: "blablabla contenu de toto gauche" }, //élément gauche
            { titre: "nouvel élément droite4", contenu: "contenu de toto droite" }, //élément droite
        ]
    ]

    return (
        <React.Fragment>
            <Timeline>
                {contenusTimeline.map((sousListe, index) => { //chaque couple d'élément
                    return (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent color="text.secondary"
                                className={props.section.titre === sousListe[0].titre
                                    ? "selected"
                                    : "clickable"}
                                onClick={() => {
                                    props.setSection({
                                        titre: sousListe[0].titre,
                                        contenu: sousListe[0].contenu
                                    })
                                }}
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                            >
                                {sousListe[0].titre}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <LogoDevIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent color="text.secondary"
                                className={props.section.titre === sousListe[1].titre
                                    ? "selected"
                                    : "clickable"
                                }
                                onClick={() => {
                                    props.setSection({
                                        titre: sousListe[1].titre,
                                        contenu: sousListe[1].contenu
                                    })
                                }}
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                            >
                                {sousListe[1].titre}
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </React.Fragment>
    );
}
