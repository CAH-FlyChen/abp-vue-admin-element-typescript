using Zion.System.CompanyContext;
using Zion.System.CompanyContext.Dtos;
using Zion.System.RegionContext;
using Zion.System.RegionContext.Dtos;
using AutoMapper;

namespace Zion.System;

public class SystemApplicationAutoMapperProfile : Profile
{
    public SystemApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap<Company, CompanyDto>();
        CreateMap<CompanyCreateDto, Company>(MemberList.Source);
        CreateMap<CompanyUpdateDto, Company>(MemberList.Source);

        CreateMap<CompanyLocation, CompanyLocationDto>();
        CreateMap<CompanyLocationDto, CompanyLocation>(MemberList.Source);
        CreateMap<Region, RegionDto>();
        CreateMap<RegionCreateDto, Region>(MemberList.Source);
        CreateMap<RegionUpdateDto, Region>(MemberList.Source);
    }
}
