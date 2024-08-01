﻿using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace Zion.Product;

[DependsOn(
    typeof(AbpVirtualFileSystemModule)
    )]
public class ProductInstallerModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<ProductInstallerModule>();
        });
    }
}
