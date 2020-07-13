var config = {
    config: {
        mixins: {

            'Magento_Sales/order/create/scripts': {
                'Sm_MultiCoupon/order/create/scripts' : true
            },
            'Magento_Sales/order/create/form': {
                'Sm_MultiCoupon/order/create/form' : true
            }
        }
    }
};