import movementIcon from '../../images/modules/moduleMovement-40.svg'
import rotationIcon from '../../images/modules/moduleRotaion-40.svg'
import transformIcon from '../../images/modules/moduleTransform-40.svg'
import textIcon from '../../images/modules/moduleText-40.svg'
import clickIcon from '../../images/modules/moduleClick-40.svg'
import dragIcon from '../../images/modules/moduleDrag-40.svg'

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
  },
  Клик: {
    url: '/modules/dynamic/click.html',
    language: 'JavaScript',
    icon: clickIcon
  },
  Перетаскивание: {
    url: '/modules/dynamic/drag.html',
    language: 'JavaScript',
    icon: dragIcon
  }
}

export default modulesMap
