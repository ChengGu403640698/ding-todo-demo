1. 组件的声明周期触发的顺序

   1.1 组件本身的初始化流程

   constructor --  willmount -- render -- mounted

   1.2 组件的自身状态改变 this.setState()

   shouldupdate -- willupdate -- renderr -- didupdate

   1.3 父组件状态改变导致子组件的props改变

   fathershoulduodate -- fatherwillupdate -- fatherrender --- sonshouldrecieveProps -- son shouldupdate -- sonWillUpadate -- sonrender -- sondidupdate -- fatherdidupdate

2. 如果要根据父组件的props来重新初始化state的话 可以在shouldrecieveProps生命周期中计算