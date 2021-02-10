import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'



const DropMenu = (props) => {
  //<a href ><b>{props.name}</b></a>
  // ^ we'll use this when we have more pages up and running
  return (
  <div class="menu">
      <h3>{props.name}</h3>
  </div>
  )
}


const Navbar = () => (
  //TODO: change to dynamic component that takes in a list of Menu Objects?
  //  - Add Sign In functionality. Research typical implementations
  <div class="taskbar" id="topmenu">
    <DropMenu name="Home" />
    <DropMenu name="About" />
    <DropMenu name="FAQ" />
    <DropMenu name="Sign In" />
  </div>
)

const App = () => {
  console.log('Hello from component')
  return (
  <div>
    <title>statit-Home</title>
    <Navbar />
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quodsi esset in voluptate summum bonum, ut dicitis, optabile esset maxima in voluptate nullo intervallo interiecto dies noctesque versari, cum omnes sensus dulcedine omni quasi perfusi moverentur. Aut etiam, ut vestitum, sic sententiam habeas aliam domesticam, aliam forensem, ut in fronte ostentatio sit, intus veritas occultetur? Sunt enim quasi prima elementa naturae, quibus ubertas orationis adhiberi vix potest, nec equidem eam cogito consectari. Duo Reges: constructio interrete. Ait enim se, si uratur, Quam hoc suave! dicturum. Ex quo illud efficitur, qui bene cenent omnis libenter cenare, qui libenter, non continuo bene. Progredientibus autem aetatibus sensim tardeve potius quasi nosmet ipsos cognoscimus. Nec vero intermittunt aut admirationem earum rerum, quae sunt ab antiquis repertae, aut investigationem novarum. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem semper boni plus habere vultis, tolerabilem. Bonum ipsum etiam quid esset, fortasse, si opus fuisset, definisses aut quod esset natura adpetendum aut quod prodesset aut quod iuvaret aut quod liberet modo. Ergo in iis adolescentibus bonam spem esse dicemus et magnam indolem, quos suis commodis inservituros et quicquid ipsis expediat facturos arbitrabimur? Quid enim de amicitia statueris utilitatis causa expetenda vides. 

Iam insipientes alios ita esse, ut nullo modo ad sapientiam possent pervenire, alios, qui possent, si id egissent, sapientiam consequi. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. Nam qui valitudinem aestimatione aliqua dignam iudicamus neque eam tamen in bonis ponimus, idem censemus nullam esse tantam aestimationem, ut ea virtuti anteponatur. Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Et tamen puto concedi nobis oportere ut Graeco verbo utamur, si quando minus occurret Latinum, ne hoc ephippiis et acratophoris potius quam proegmenis et apoproegmenis concedatur; Sive hoc difficile est, tamen nec modus est ullus investigandi veri, nisi inveneris, et quaerendi defatigatio turpis est, cum id, quod quaeritur, sit pulcherrimum. Ergo in hac ratione tota de maximis fere rebus Stoici illos secuti sunt, ut et deos esse et quattuor ex rebus omnia constare dicerent. Cum efficere non possit ut cuiquam, qui ipse sibi notus sit, hoc est qui suam naturam sensumque perspexerit, vacuitas doloris et voluptas idem esse videatur. Longum est enim ad omnia respondere, quae a te dicta sunt. Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers? 

Nam cum Academicis incerta luctatio est, qui nihil affirmant et quasi desperata cognitione certi id sequi volunt, quodcumque veri simile videatur. Quis autem honesta in familia institutus et educatus ingenue non ipsa turpitudine, etiamsi eum laesura non sit, offenditur? An, si id probas, fieri ita posse negas, ut ii, qui virtutis compotes sint, etiam malis quibusdam affecti beati sint? Quod si ita est, ut neque quisquam nisi bonus vir et omnes boni beati sint, quid philosophia magis colendum aut quid est virtute divinius? 

Equidem in omnibus istis conclusionibus hoc putarem philosophia nobisque dignum, et maxime, cum summum bonum quaereremus, vitam nostram, consilia, voluntates, non verba corrigi. Praeclare, inquit, facis, cum et eorum memoriam tenes, quorum uterque tibi testamento liberos suos commendavit, et puerum diligis. Videamus igitur sententias eorum, tum ad verba redeamus. Quanti quidque sit aliter docti et indocti, sed cum constiterit inter doctos quanti res quaeque sit-si homines essent, usitate loquerentur -, dum res maneant, verba fingant arbitratu suo. Nobis enim ista quaesita, a nobis descripta, notata, praecepta sunt, omniumque rerum publicarum reetionis genera, status, mutationes, leges etiam et instituta ac mores civitatum perscripsimus. Licet hic rursus ea commemores, quae optimis verbis ab Epicuro de laude amicitiae dicta sunt. Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L. Lege laudationes, Torquate, non eorum, qui sunt ab Homero laudati, non Cyri, non Agesilai, non Aristidi aut Themistocli, non Philippi aut Alexandri, lege nostrorum hominum, lege vestrae familiae; Certe nihil nisi quod possit ipsum propter se iure laudari. E quo efficitur, non ut nos non intellegamus quae vis sit istius verbi, sed ut ille suo more loquatur, nostrum neglegat. 


      </p>
    </div>
  </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
