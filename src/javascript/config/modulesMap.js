import movementIcon from '../../images/modules/moduleMovement-40.svg'
import rotationIcon from '../../images/modules/moduleRotaion-40.svg'
import transformIcon from '../../images/modules/moduleTransform-40.svg'
import textIcon from '../../images/modules/moduleText-40.svg'

const modulesMap = {
  Движение: {
    url: '/modules/static/movement.html',
    language: 'CSS',
    icon: movementIcon
  },
  Вращение: {
    url: '/modules/static/rotation.html',
    language: 'CSS',
    icon: rotationIcon
  },
  Трансформация: {
    url: '/modules/static/transformation.html',
    language: 'CSS',
    icon: transformIcon
  },
  Текст: {
    url: '/modules/static/text.html',
    language: 'CSS',
    icon: textIcon
  }
}

export default modulesMap
